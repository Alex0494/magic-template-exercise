PERSONALIZZATORE DI PAGINE WEB --> CMS

prendere i dati da mongo con la possibilità di poter intervenire per modificare 
lo stile delle pagine e salvare la configurazione 

SITO WEB che da la possibilità di modificare lo stile degli elementi sulla pagina

ELEMENTI SITO WEB MVP:

navbar con nav links alle pagine

una singola configurazione 

SCALABILITY:

USER REQUIREMENTS: 

sito web personalizzabile multi tema, possibilità di intervenire per modificare l'aspetto delle pagine, aggiungere sezioni e contenuti 

--> tutti i dati sull' aspetto ed il contenuto del sito web vengono caricati da mongo-db
--> ci sono due sezioni del sito web, quindi virtualhost 1 = sito virtualhost 2 = cms 
dal cms io seleziono le configurazioni del sito e personalizzo gli elementi sulla pagina web 

TASKS BREAKDONW:
1) virtualhosts with gulp
2) mongo db configuration
3) read and write from mongodb
3) how to load configuration data from mongodb
4) how to apply stylesheets(LESS) and html elements loaded from mongo