function forum(command){
    if(command === 'upvote'){
        this.upvotes ++;
    } else if(command === 'downvote'){
        this.downvotes ++;
    }else if(command === 'score'){
        let allVotes = this.upvotes + this.downvotes;
        let score = this.upvotes - this.downvotes;
        let obfuscatedNumber = Math.ceil(Math.max(this.downvotes, this.upvotes) * 0.25);
        let obfuscatedVotes = this.upvotes;
        let obfuscatedDownvotes = this.downvotes;
        if(allVotes > 50){
            obfuscatedVotes += obfuscatedNumber;
            obfuscatedDownvotes += obfuscatedNumber;
        }
        let rating = 'new';

        if(allVotes < 10){
            rating = 'new';
        } else if(this.upvotes > allVotes * 0.66){
            rating = 'hot';
        } else if(score >= 0 && allVotes > 100){
            rating = 'controversial';
        } else if(score < 0){
            rating = 'unpopular';
        }

        return [obfuscatedVotes, obfuscatedDownvotes, score, rating];
    }
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
forum.call(post, 'upvote');
forum.call(post, 'downvote');
let score = forum.call(post, 'score'); // [127, 127, 0, 'controversial']
forum.call(post, 'downvote');          // (executed 50 times)
score = forum.call(post, 'score'); 