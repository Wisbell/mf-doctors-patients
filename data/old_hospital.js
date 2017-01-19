{
  "rules": {
    ".read": true,
    ".write": true,
    "patients": {
      ".indexOn": "doctor_id"
    }
  }
}



{
    "doctors": [
        "killigrew": {
            "first_name": "Johan",
            "last_name": "Killigrew",
            "speciality": "Pediatrics"
        }
    ],
    "patients": [
        "svenson": {
            "first_name": "Margot",
            "last_name": "Svenson",
            "ailment": "Arthritis",
            "doctor_id": "killigrew"
        }
    ]
}
