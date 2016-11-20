import praw

r = praw.Reddit(user_agent="Tutorial by Danny /u/comments")
r.login

words_to_match = ['hello']

def run_bot():
    subreddit = r.get_subreddit("python")
    comments = subreddit.get_comments('all')
    for comment in comments:
        comment_text =comment.body
        isMatch = any(string in comment_text for string in words_to_match)
        if isMatch:
            print(comment_text)