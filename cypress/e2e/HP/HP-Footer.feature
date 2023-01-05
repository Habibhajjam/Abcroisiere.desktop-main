Feature: Home Page abcroisiere
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

        @HP-Footer
        Scenario: HP-Footer
        When check the bloc Footer
        Then check the links of bloc footer