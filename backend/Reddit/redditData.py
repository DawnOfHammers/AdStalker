import praw
#key in the submission ID of the Reddit thread you want to scrape
sub_ids=[]
sub_id = "5do1bs"

def get_replies(comment, reply_list):
    """ recursive function that goes through the reply tree of a comment """
    reply_list.append({"id": comment.id, "comment": comment.body})
    if len(comment._replies) > 0:
        for r in comment._replies:
            get_replies(r, reply_list)
    return reply_list

#state your purpose for conducting the comment scrape
r = praw.Reddit('get comments from r for data by User: danny')
subreddits = ['michaeljordan', 'MLB', 'NFL', 'NBA',
						 'hillary', 'kimjongun', 'duterte',
						 'ps4', 'iphone7', 'amazon', 'fitbit',
						 'starbucks', 'apple', 'Volkswagen']

submission = r.get_submission(submission_id=sub_id)
submission.replace_more_comments(limit=None, threshold=0)

# final array for writing to file
final = []
for s in subreddits:
    subreddit = r.get_subreddit(s)
    subreddit_comments = subreddit.get_comments()

    for comment in subreddit_comments:
        """ loops through all comments to submission """
        x = []  # array that holds the comment and all replies
        # get all replies and append it to our array for writing to file
        final.append(get_replies(comment, x))
    path = 'C:/Users/yhw99_000/Documents/GitHub\AdStocker/backend/%s.txt' %(s,)
    with open(path, 'a') as outf:
        """ open file and write to it """
        # 2 dimension array needs two for loops
        for ele in final:
            for ele2 in ele:
                # write to file in the proper comma delimited format, one per line
                outf.write(u"{0},{1}\n".format(ele2['id'], ele2['comment']).encode('utf-8'))
        outf.close()