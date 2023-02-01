# Jukebox
Queue up your favorite songs in a playlist :musical_note:

## User stories
### MVP
- As a user, I want to create an account.
- As a user, I want to login.
- As a user, I want to know if my credentials are incorrect.
- As a user, I want to create a playlist.
- As a user, I want to add songs to my playlist.
- As a user, I want to view my created playlists.
- As a user, I want to view a selected playlist.
- As a user, I want to edit a single playlist.
- As a user, I want to delete songs from a selected playlist, or delete the whole playlist.

### Version 2
- As a user, I want to view and favorite others playlists.
- As a user, I want to play the selected song.
- As a user, I want to delete my account.

### Version 3
- As a user, I want to link this to my Spotify account.
- As a user, I want to make my playlist private or public.
- As a user, I want to "insert" a coin to play a random song.

## Wireframes
<figure>
    <figcaption>Login</figcaption>
    <img alt="wireframes-1" src="images/wireframes-1.jpg" width="100%" height="100%">
</figure>
<figure>
    <figcaption>Incorrect login</figcaption>
    <img alt="wireframes-2" src="images/wireframes-2.jpg" width="100%" height="100%">
</figure>
<figure>
    <figcaption>Index page</figcaption>
    <img alt="wireframes-3" src="images/wireframes-3.jpg" width="100%" height="100%">
</figure>
<figure>
    <figcaption>Add playlist</figcaption>
    <img alt="wireframes-4" src="images/wireframes-4.jpg" width="100%" height="100%">
</figure>
<figure>
    <figcaption>View single playlist</figcaption>
    <img alt="wireframes-6" src="images/wireframes-6.jpg" width="100%" height="100%">
</figure>
<figure>
    <figcaption>Update or delete playlist</figcaption>
    <img alt="wireframes-7" src="images/wireframes-7.jpg" width="100%" height="100%">
</figure>

## Entity Relationship Diagram (ERD)
<figure>
    <figcaption></figcaption>
    <img alt="erd" src="images/erd.jpg" width="100%" height="100%">
</figure>

## Technologies used
- MongoDB
- Mongoose
- Node
- Express
- Bootstrap

## Routes Table: ##
| Name        | Path                             |HTTP Verb    |Purpose             |
| ----------- | -------------------------------- | ----------- | ------------------ |
| Index       | /playlists/                      |GET          |Display all playlists belonging to the user|
| Create      | /playlists/                      |POST         |Creates new playlist                       |
| Show        | /playlists/:playlistId           |GET          |Displays one playlist                      |
| Update      | /playlists/:playlistId           |PATCH        |Updates selected playlist                  |
| Delete      | /playlists/:playlistId           |DELETE       |Deletes playlist                           |
| Delete      | /songs/:songId                   |DELETE       |Deletes song from playlist                 |
| Create      | /songs/:songId                   |POST         |Adds new song to playlist                  |
| SignUp      | /sign-up                         |POST         |Creates new user account                   |
| SignIn      | /login                           |POST         |Logs user in                               |

---

Check out jukebox-client [here](https://github.com/hannaner/jukebox-client)