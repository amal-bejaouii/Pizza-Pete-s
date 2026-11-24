
package com.pizzapetes.backend;

import com.pizzapetes.backend.model.Utilisateur;
import com.pizzapetes.backend.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DemoDataConfig {

    @Bean
    CommandLineRunner demoUser(
            UtilisateurRepository repository,
            PasswordEncoder encoder,
            @Value("${app.demo.email:}") String email,
            @Value("${app.demo.password:}") String password) {

        return args -> {
            if (!email.isBlank()
                    && !password.isBlank()
                    && repository.findByEmail(email).isEmpty()) {

                repository.save(new Utilisateur(
                    "Utilisateur Test",
                    email,
                    encoder.encode(password)
                ));

                System.out.println("Utilisateur test créé.");
            }
        };
    }
}

