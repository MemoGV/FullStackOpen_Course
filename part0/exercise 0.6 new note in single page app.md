sequenceDiagram 
participant browser
participant server

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
                {content: "teest", date: "2024-09-05T17:46:21.704Z"}
activate server
server-->>browser: Code 201 Created
