CREATE TABLE core.spells (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    base_rank INT,
    description VARCHAR(1000)
);

INSERT INTO core.spells (name, base_rank, description)
VALUES 
('Fireball', 3, 'A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame.'),
('Magic Missile', 1, 'You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target.');