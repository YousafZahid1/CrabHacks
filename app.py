from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

users = {'username': 'password'}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/signup', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        # f=open("hi.txt","a")
        # f.write("username "+username+" password: "+password+"\n")
        # f.close()

        print(username, password)
        
            
        z=open("hi.txt","r")
        if("username " + username + " password: " +password+"\n" in z.readlines()):
            return "good job"
        else:
            return "sorry not found"
        
        # if "username " + username + " password: " +password+ "\n" in z.readlines():
        #     return redirect(url_for('success'))
        # else:
        #     return render_template('login.html', message='Invalid username or password')
        

        
    # return render_template('login.html')

        with open("hi.txt", "a") as f:
            f.write("username " + username + " password: " +password+"\n")

@app.route('/')
def signup():
    return render_template('correctsignup.html')

@app.route('/register', methods=['POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        users[username] = password
        return redirect(url_for('index'))
    else:
        return redirect(url_for('signup'))


@app.route('/success')
def success():
    return "Login successful"

if __name__ == '__main__':
    app.run(debug=True)
