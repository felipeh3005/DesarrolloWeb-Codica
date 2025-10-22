// BEGIN (write your solution here)// contador de likes y dislikes
const trackVotes = (likes, dislikes, action) => {
    if (action === 'like') {
        likes++;
    } else if (action === 'dislike') {
        dislikes++;
    }

    return {
        likes: likes,
        dislikes: dislikes
    };
};
// END

export default trackVotes;