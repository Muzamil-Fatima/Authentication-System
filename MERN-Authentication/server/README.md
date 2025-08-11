### Registration Function Overview

* Extracts user data (`name`, `email`, `phone`, `password`, `verificationMethod`) from the request body.
* Validates that all required fields are provided.
* Validates the phone number format strictly using the regex `/^\+923\d{9}$/`, which matches Pakistan mobile numbers starting with `+923`.
* Checks if a user with the same verified email or phone number already exists in the database to prevent duplicates.
* Limits unverified registration attempts to a maximum of 3 per user to avoid spam registrations.
* Creates a new user document in MongoDB if validations pass.
* Generates a verification code via a method defined in the user model.
* Saves the new user and sends the verification code using the chosen verification method (e.g., SMS or email).
* Forwards any errors to the global error handling middleware using `next(error)`.

