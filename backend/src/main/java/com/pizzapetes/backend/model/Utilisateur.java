
package com.pizzapetes.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "utilisateurs")
public class Utilisateur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(name = "mot_de_passe_hash")
    private String motDePasseHash;

    public Utilisateur() {
    }

    public Utilisateur(String nom, String email, String hash) {
        this.nom = nom;
        this.email = email;
        this.motDePasseHash = hash;
    }

    public Long getId() {
        return id;
    }

    public String getNom() {
        return nom;
    }

    public String getEmail() {
        return email;
    }

    public String getMotDePasseHash() {
        return motDePasseHash;
    }
}
