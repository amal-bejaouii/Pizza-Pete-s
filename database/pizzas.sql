-- US02 : Consultation des pizzas
-- T05 : Création de la table

CREATE TABLE IF NOT EXISTS pizzas (
    id BIGSERIAL PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    description TEXT,
    prix NUMERIC(10,3) NOT NULL CHECK (prix >= 0),
    image_url VARCHAR(255)
);

-- T06 : Ajout des pizzas

INSERT INTO pizzas (nom, description, prix, image_url)
VALUES
('Pizza Neptune', 'Thon, olives, mozzarella, sauce tomate',
18.900, '/images/neptune.jpg'),

('Pizza Margarita', 'Sauce tomate, mozzarella, basilic',
12.500, '/images/margarita.jpg'),

('Pizza Pepperoni', 'Sauce tomate, mozzarella, pepperoni',
16.500, '/images/pepperoni.jpg'),

('Pizza 4 Fromages', 'Mozzarella, cheddar, parmesan, fromage bleu',
17.500, '/images/4fromages.jpg');

-- Vérification
SELECT * FROM pizzas;