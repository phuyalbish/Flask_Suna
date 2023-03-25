
import sys
from translate_to_text import *
#upload

filename = sys.argv[1]


#transcribe



audio_url=upload(filename)
save_transcript(audio_url,filename)