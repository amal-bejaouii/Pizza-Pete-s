
package com.pizzapetes.backend.config;

import com.pizzapetes.backend.repository.UtilisateurRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.csrf.HttpSessionCsrfTokenRepository;

@Configuration
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public UserDetailsService userDetailsService(
            UtilisateurRepository repository) {

        return email -> {
            var utilisateur = repository.findByEmail(email)
                .orElseThrow(() ->
                    new UsernameNotFoundException(
                        "Utilisateur introuvable"
                    )
                );

            return User.withUsername(utilisateur.getEmail())
                .password(utilisateur.getMotDePasseHash())
                .roles("USER")
                .build();
        };
    }

    @Bean
    public SecurityFilterChain securityFilterChain(
            HttpSecurity http) throws Exception {

        http
            .csrf(csrf -> csrf
                .csrfTokenRepository(
                    new HttpSessionCsrfTokenRepository()
                )
            )
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/csrf").permitAll()
                .requestMatchers("/api/auth/login").permitAll()
                .requestMatchers("/api/auth/me").authenticated()
                .anyRequest().permitAll()
            )
            .formLogin(form -> form
                .loginProcessingUrl("/api/auth/login")
                .usernameParameter("email")
                .passwordParameter("motDePasse")
                .successHandler((request, response, auth) -> {
                    response.setStatus(200);
                })
                .failureHandler((request, response, error) -> {
                    response.sendError(401);
                })
                .permitAll()
            );

        return http.build();
    }
}
