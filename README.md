# Software di Autenticazione Java e Angular

Questo progetto è un'applicazione di autenticazione che gestisce la registrazione degli utenti e il login utilizzando una crittografia basata su hashing in Base64. L'applicazione è sviluppata utilizzando Java per il backend e Angular per il frontend.

## Funzionalità Principali

- Registrazione degli utenti: Gli utenti possono registrarsi fornendo nome, cognome, email e una password.
- Login degli utenti: Gli utenti possono accedere all'applicazione utilizzando le loro credenziali registrate.
- Crittografia Hashing: Le password degli utenti vengono crittografate utilizzando l'algoritmo di hashing in Base64, garantendo la sicurezza delle credenziali.

## Requisiti di Sistema

- Java 8 o versioni successive
- Node.js e npm
- Angular CLI

## Installazione e Avvio

1. Clona il repository:

    ```bash
    git clone <url_del_repository>
    ```

2. Backend (Java):
   - Naviga nella cartella del backend:

     ```bash
     cd backend
     ```

   - Esegui il build del progetto:

     ```bash
     mvn clean install
     ```

   - Avvia il server:

     ```bash
     java -jar target/auth-service.jar
     ```

3. Frontend (Angular):
   - Naviga nella cartella del frontend:

     ```bash
     cd frontend
     ```

   - Installa le dipendenze:

     ```bash
     npm install
     ```

   - Avvia l'applicazione:

     ```bash
     ng serve
     ```

4. L'applicazione sarà disponibile all'indirizzo `http://localhost:4200`.

## Configurazione

- Il backend utilizza una connessione predefinita al database. Per modificare la configurazione del database, modifica il file `application.properties` nella cartella `src/main/resources`.

## Utilizzo

1. Accedi all'applicazione utilizzando il browser e vai alla pagina di registrazione per creare un nuovo account.
2. Una volta registrato, puoi effettuare il login con le tue credenziali.
3. Dopo il login, avrai accesso alle funzionalità dell'applicazione.
