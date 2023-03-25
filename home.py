import openai
from gtts import gTTS
from playsound import playsound
import speech_recognition
import pyttsx3 


from flask import Flask, render_template, url_for, request

app = Flask(__name__)


@app.route('/voicerecord')
def voicerecord():
    return render_template('voicerecord.html')


@app.route('/voice')
def voice():
    return render_template('voice.html')




@app.route('/test')
def test():
    return render_template('test.html')



@app.route('/home')
def home():
    return render_template('home.html')
    
    
    
@app.route('/index')
def index():
    return render_template('index.html')



@app.route('/result', methods=['POST', 'GET'])
def result():
    output = request.form.to_dict()
    indexa = output["num"]
    res = askToChatGPT(indexa)
    # res = speechRecognition()
    return render_template('index.html', result = res)







def chatGPTProcess():

    recorded_sound_filename = "sounds/input.wav"
    transcriptedfile = "sounds/transcriptedtext.txt"
    chat_voice = "sounds/output_voice.wav"
    chat_text= "sounds/output_text.txt"
    language = "en"




    transcriptedtext = speechRecognition()
    answer = askToChatGPT(transcriptedtext)
    playsound(chat_voice)
        
    with open(transcriptedfile, "w") as f:
                f.write(transcriptedtext)
    with open(chat_text, 'w') as f:
        f.write(answer)
    return transcriptedtext, answer



def speechRecognition():
    recognizer = speech_recognition.Recognizer()
    try:
        with speech_recognition.Microphone() as mic:
            recognizer.adjust_for_ambient_noise(mic,duration=0.3)
            print("Say Something:")
            audio = recognizer.listen(mic)
            text = recognizer.recognize_google(audio)
            text = text.lower()
            print(f"Me:{text}")
    except:
        text = "didn't you understand me?"
        
    return text  



# def askToChatGPT(transcriptedtext,chat_voice):
def askToChatGPT(transcriptedtext):
    
    
    CHAT_APT ="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"
    
    openai.api_key =CHAT_APT
    model_engine = "text-davinci-003"
    completion = openai.Completion.create(
        engine = model_engine,
        prompt = transcriptedtext,
        max_tokens = 1024,
        n=1,
        stop=None,
        temperature=0.5,
    )
    response = completion.choices[0].text
    print(response)

    # speech = gTTS(text=response,lang="en", slow=False, tld="com.au")
    # speech.save(chat_voice)

    return response



if __name__ == "__main__":
    app.run(debug=True) 