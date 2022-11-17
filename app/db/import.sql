BEGIN;

DROP TABLE IF EXISTS "pro", "party";

CREATE TABLE
    IF NOT EXISTS "pro" (
        "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        "name" varchar(55) NOT NULL,
        "image" TEXT NULL,
        "adress" varchar(255) NULL,
        "city" varchar(55) NOT NULL,
        "zip_code" varchar(10) NOT NULL,
        "location" point NOT NULL,
        "phone" varchar(10) NULL,
        "is_partner" bool NOT NULL default false
    );

CREATE TABLE
    IF NOT EXISTS "party" (
        "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        "name" varchar(255) NOT NULL,
        "video" varchar(255) NULL,
        "price" INTEGER NOT NULL,
        "price_secondary" INTEGER NULL,
        "price_tertiary" INTEGER NULL,
        "date" DATE NOT NULL,
        "start_at" varchar(10) NULL,
        "end_at" varchar(10) NULL,
        "reservation_link" text NULL,
        "description" text NOT NULL,
        "pro_id" INT REFERENCES pro(id)
    );

INSERT INTO
    "pro" (
        "name",
        "image",
        "adress",
        "city",
        "zip_code",
        "phone",
        "location"
    )
VALUES (
        'Voile Bleu',
        'https://media-cdn.tripadvisor.com/media/photo-s/1d/1d/8e/0f/plage.jpg',
        'Av. de Carnon',
        'La Grande-Motte',
        '34280',
        '0699173585',
        '43.55737,4.03923'
    );

INSERT INTO
    "party" (
        "name",
        "price",
        "date",
        "start_at",
        "end_at",
        "description",
        "pro_id"
    )
VALUES (
        'soirée de ouf',
        35,
        '2022-11-17',
        '22',
        '6',
        'Ce rendez-vous annuel et incontournable de Montpellier, vous invite à parcourir les rues du centre ville en soirée pour des projections gratuites et en plein air des bâtiments et monuments emblématiques de la ville. Un spectacle sons et lumières, gratuit dans l’Écusson.',
        1
    );

COMMIT;