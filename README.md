# 4Pay API

### Authentication

##### login
```sh
POST /api/auth/login

{
    email: String,
    password: String,
}
```

##### register
```sh
POST /api/users

{
    email: String,
    password: String,
    fullname: String,
    phone: String,
    country: String,
    gender: String,
    accountType: String,
}
```
Note: The register route follows strict validation rules shown below:
email => valid email address format (xxxx@xxx.xxx)
password => 8+ characters
phone => international format of phone numbers (+xxx...) must be 13 digits after '+'
accountType => one of 'freelancer' or 'employer'
gender => one of 'M' or 'F'

I am making this a public repo.
