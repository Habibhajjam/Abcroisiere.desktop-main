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

    @HP-Top-Comp 
    Scenario: HP-top-Comp
   
        When check the bloc top Comp
        Then check the title
        And check tho logos of Comp
        And check Costa
        And check MSC
        And check NCL
        And check RC 
        And check CE 
        And check CC 
        And check PC 
        And check CXC
