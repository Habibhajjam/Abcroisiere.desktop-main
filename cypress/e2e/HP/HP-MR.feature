Feature: Home Page PMVC 
    As user I want to test those functionalities of pmvc's home page:
        - Header: abcroisiere logo, contact phone, pictos (Newsletter, Suivi de commande and Agences)
        - Rich Menu 
        - Search Engine 
        - Slider OP Merch 
        - Top destinations 
        - Les imbattables du moment 
        - Par ici nos bons plans !
        - Nos meilleures ventes
        - Suivez-nous, on vous emmène 
        - Newsletters
        - Footer

    Background:
        Given I open abcroisiere website

        @HP-MR
        Scenario: HP-MR
        When check the bloc MR
        Then check the popup destinations
        And check the popup date
        And check the popup VDD
        And check the popup companies
        And check the button rechercher