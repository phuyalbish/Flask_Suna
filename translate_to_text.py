import requests
import time



API_KEY_ASSEMBLYAI = "a8e2d2406f7f4648ab330d208f2eee96"

upload_endpoint = 'https://api.assemblyai.com/v2/upload'

transcript_endpoint = "https://api.assemblyai.com/v2/transcript"

headers = {'authorization': API_KEY_ASSEMBLYAI}


def upload(filename):
    def read_file(filename, chunk_size=5242880):
        with open(filename, 'rb') as _file:
            while True:
                data = _file.read(chunk_size)
                if not data:
                    break
                yield data

    upload_response = requests.post(upload_endpoint,
                            headers=headers,
                            data=read_file(filename))


    audio_url = upload_response.json()['upload_url']
    return audio_url


def transcribe(audio_url):

    trenscript_request = { "audio_url": audio_url }

    trenscript_response = requests.post(transcript_endpoint, json=trenscript_request, headers=headers)
    job_id = trenscript_response.json()['id']
    return job_id


    
    




#poll
def pool(transcript_id):
    pooling_endpoint = transcript_endpoint + '/' + transcript_id
    pooling_response = requests.get(pooling_endpoint, headers=headers)
    return pooling_response.json()

def get_transcription_result_url(audio_url):
    transcript_id = transcribe(audio_url)
    
    print("Wait some seconds")
    while True:
        data = pool(transcript_id)
        if data['status'] == 'completed':
            return data, None
        elif data['status'] == 'error':
            return data,data['error']
        # time.sleep(30)


#save Transcript
def save_transcript(audio_url,filename):
    data,error = get_transcription_result_url(audio_url)
    if data:
        text_filename = filename + ".txt"
        with open(text_filename, "w") as f:
            f.write(data['text'])
        print('transcription saved')
    elif error:
        print('Error!',error)
        