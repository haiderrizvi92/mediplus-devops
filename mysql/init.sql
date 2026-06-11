CREATE TABLE IF NOT EXISTS doctors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    speciality VARCHAR(100)
);

INSERT INTO doctors(name,speciality)
SELECT 'Dr Ahmed','Cardiologist'
WHERE NOT EXISTS (
    SELECT 1 FROM doctors WHERE name='Dr Ahmed'
);

INSERT INTO doctors(name,speciality)
SELECT 'Dr Ali','Dentist'
WHERE NOT EXISTS (
    SELECT 1 FROM doctors WHERE name='Dr Ali'
);

INSERT INTO doctors(name,speciality)
SELECT 'Dr Sara','Dermatologist'
WHERE NOT EXISTS (
    SELECT 1 FROM doctors WHERE name='Dr Sara'
);