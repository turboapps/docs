## Password Policy 

The following password policy is enforced by Turbo Server when creating **internal users** to ensure the server is more secure against password attacks. This password policy does not apply to users created with the **Anonymous** or **Single Sign-On** authentication methods.

### Complexity Requirements

- The password must be at least 8 characters in length
- The password must not be the same as the username

### Data Breach Requirements

The following requirements only apply if the **Check for Compromised Passwords** setting is enabled:

- The password must not be contained in a data breach. Turbo Server checks the [HIBC](https://haveibeenpwned.com/) database for compromised passwords.