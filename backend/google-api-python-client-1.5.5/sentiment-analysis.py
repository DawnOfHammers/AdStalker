import argparse
import sys

from googleapiclient import discovery
from oauth2client.client import GoogleCredentials

def main(argv):
    '''Run a sentiment analysis request on text within a passed filename.'''

    credentials = GoogleCredentials.get_application_default()
    service = discovery.build('language', 'v1', credentials=credentials)

    for j in range(1, len(argv)):
        file = argv[j]
        with open(file, 'r') as review_file:
            service_request = service.documents().analyzeSentiment(
                body={
                  'document': {
                    'type': 'PLAIN_TEXT',
                    'content': review_file.read(),
                    }
                }
            )
        response = service_request.execute()
        score = response['documentSentiment']['score']
        magnitude = response['documentSentiment']['magnitude']

        for i, sentence in enumerate(response['sentences']):
          sentence_sentiment = sentence['sentiment']['score']
         # print('Sentence {} has a sentiment score of {}'.format(i, sentence_sentiment))

        target = open('data.txt', 'a')
        hashtag = file[:len(file)-4]
        target.write('#{} {}'.format(hashtag, score))
        target.write('\n')
    target.close()
        # print('Overall Sentiment: score of {} with magnitude of {}'.format(
        #   score, magnitude))
    return 0

if __name__ == '__main__':
    main(sys.argv)
