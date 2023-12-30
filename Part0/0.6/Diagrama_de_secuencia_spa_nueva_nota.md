sequenceDiagram
    participant browser
    participant server

    Note over browser: client add a new note: "Hello" and browser sends JSON data to server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

    Note over server: server saves the note and responds with HTTP status code 201
    
    activate server
    server-->>browser: [{"message":"note created"}]
    deactivate server
   