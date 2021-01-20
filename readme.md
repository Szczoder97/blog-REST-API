### Blog REST API Node.js
**Project for stuides.** <br />
**Authors:** ['Paweł Szczodrowski](https://github.com/Szczoder97), ['Maricn Wiśniewski'](https://github.com/marcinwisniewski98) <br />
**Group S22-32** <br />
**Theme:** Blog <br />
#Technology: <br/>
    - Node.js  <br/>
    - Express  <br/>
    - MongoDB Atlas  <br/>
# Architecture: <br/><br/>

**App Settings**<br/>
!['App settings'](https://github.com/Szczoder97/blog-REST-API/blob/main/readme_img/app.png)<br/><br/>
 
**User Model:**<br/>
!['User model'](https://github.com/Szczoder97/blog-REST-API/blob/main/readme_img/user_model.png)<br/><br/>

**Registering new User**<br/>
!['User register'](https://github.com/Szczoder97/blog-REST-API/blob/main/readme_img/user_register.png)<br/>
There is validation system that protects from wrong data fromat.<br/>
We' ve used bcrypt also to hash passwords. <br/><br/>

**Log in**<br/>
!['User login'](https://github.com/Szczoder97/blog-REST-API/blob/main/readme_img/user_login.png)<br/>
We used Json Web Token to provide logged in user token.<br/><br/>

**Authentication**<br/>
!['Authentication'](https://github.com/Szczoder97/blog-REST-API/blob/main/readme_img/auth_middleware.png)<br/>
This is our algorythm for checikng if user is logged in.<br/><br/>

**Post Model**<br/>
!['Post model'](https://github.com/Szczoder97/blog-REST-API/blob/main/readme_img/post_model.png)<br/><br/>

**Post routes and controllers:**<br/>
!['Post route1'](https://github.com/Szczoder97/blog-REST-API/blob/main/readme_img/post_route1.png)<br/>
!['Post route2'](https://github.com/Szczoder97/blog-REST-API/blob/main/readme_img/post_route2.png)<br/><br/>

# Usage:
(post)/user/register use it to create new user it is required to create, edit and delete posts.<br/>
 You have to give 3 arguments name, email and password in json format.<br/><br/>

(post)/user/login You have to give name and email to get logged in. <br/>
 You will recive your own personal token necessary to feather operations.<br/><br/>

(get)/posts You will recive all posts in database.<br/><br/>

(post)/posts/create It creates post. You have to give 3 arguments:<br/> title, author and text, moreover in headers you have to add your token with key "auth-token".<br/><br/>
(get)/posts/id You will recive post with matching id.<br/><br/>

(update)/posts/id It edits post. You have to give 3 arguments:
<br/> title, author and text, moreover in headers you have to add your token with key "auth-token".<br/><br/>

(delete)/posts/id It removes post. You have to add in headers your token with key "auth-token" <br/><br/>
