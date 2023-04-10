# **Schedule Backend**

> Greetings! Today, I bring you the first part (backend) of my schedule project. I came up with this idea during my course project, which utilized the full MVC pattern. Based on it, I decided to split it into two projects, this one being the backend, and the other being the frontend that will consume this API. 😊 <br/> - Lucas Winicius

This is the backend part of my schedule project and this is a brief usage documentation. I hope you like it. 😘

<hr/>

## **Installation guide**

### Cloning the repository and installing dependencies:

```bash
git clone https://github.com/Lucas-Winicius/schedule_backend.git
```

```bash
cd schedule_backend
```

**Install dependencies:**

```bash
npm install
```

```bash
yarn
```

```bash
pnpm install
```

Now that the project is installed along with the extensions, let's take a look at what to do next. <br/>

- Create a `.env` file in the root directory following the `.env.template` standards.
- To execute, use the command:

```bash
npm start
```

```bash
yarn start
```

```bash
pnpm start
```

With everything ready, let's take a look at the available routes.

<hr/>

## **Routes**

### `/contacts - GET`

This method will return the saved contacts based on the author's ID sent from the request body.
<br/>
**Parameters on body:**

- **`authorId` - required parameter**

<br/>

### `/contacts - POST`

This method will add the contact to the schedule.
<br/>
**Parameters od body:**

- **`name` - required parameter**
- **`surname` - optional parameter**
- **`telephone` - telephone or email**
- **`email` - email or telephone**
- **`authorId` - required parameter**

<br/>

### `/contacts/:id - PATCH`

This method will edit the contact according to the information sent in the request body, **except** for the author's ID.
<br/>
**Parameters on body:**

- **`name` - optional parameter**
- **`surname` - optional parameter**
- **`telephone` - optional parameter**
- **`email` - optional parameter**
- **`authorId` - Parameter not accepted**

<br/>

### `/contacts/:id - DELETE`

This method will delete the contact according to the ID indicated in the URL parameter.
<br/>
**Parameters on body:**

- **`null` - This route does not have any parameters in the request body.**

After the brief study on the routes, let's talk a bit about the return values in cases of success and errors.

## **Returns**

In general, the return values are consistent with few differences in cases of success and errors.

### **On Error:**

```json
{
  "statusCode": 400,
  "message": "Please provide a name.",
  "secondaryMessage": "Oops! You forgot to type your name, it's more empty here than a box of chocolates after Christmas.",
  "date": 1681095045064,
  "success": false
}
```

### **On Success:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Congratulations! Your request has been successfully processed. Now you can celebrate with a cup of coffee! ☕️",
  "date": 1681095089774,
  "data": {
    "name": "Lucas",
    "surname": "Winicius",
    "telephone": "40028922",
    "email": "lucas@gmail.com",
    "authorId": "01",
    "_id": "643379b18456d80e7fa14b24",
    "createdAt": "2023-04-10T02:51:29.712Z",
    "__v": 0
  }
}
```

**Thank you for reading up to this point.**

<a href="https://instagram.com/sr_pumpkin_"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"></a>
