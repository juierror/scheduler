# Scheduler

- Scheduler is React web application use Firebase.
- It's created for use in university subject schedule, But this application may apply to other work.

## Firebase setting

- Scheduler use firebase to save your schedule in database for next used.
- You must edit your app id and others.

### App.js

- Change this part of code. Copy your firebase project information to this code.

```
    /*
     * edit this config to sync with firebase
     * copy from firebase project
     */
    this.config = {
      apiKey: "<API key>",
      authDomain: "<Auth Domain>",
      databaseURL: "<Database URL>",
      projectId: "<Project ID>",
      storageBucket: "<Bucket>",
      messagingSenderId: "<Sender ID>"
    };
```

## install

In your console

```
$ npm install
```

## run

In your console

```
$ npm start
```

## Example windows

### Add subject part

- Fill information of your subject.
- Click add to add subject to your schedule.
- Click change color to change color head of subject (use for group subject in many day of week).
- click reset to reset all field.

![Add subject](https://github.com/juierror/scheduler/blob/master/public/scheduler01.JPG)

#### Detail of subject part

- Click delete to delete subject
- Don't delete Example!!!
  ![Detail](https://github.com/juierror/scheduler/blob/master/public/scheduler02.JPG)

#### Table part

- Click block of schedule to delete that subject from table.
  ![Add subject](https://github.com/juierror/scheduler/blob/master/public/scheduler03.JPG)

#### Save

- After all, click save to keep data in firebase database.
  ![Detail](https://github.com/juierror/scheduler/blob/master/public/scheduler04.JPG)
