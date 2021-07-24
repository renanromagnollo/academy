// criar o objeto
const posts = {}
// criar o gerador de sequencia
const setId = {
    _id: 1,
    get id() { return this._id++}
}
// função que salva post
function savePost(post) {
    if (!post.id) { post.id = setId.id}
    posts[`${post.id}p`] = post
    return post
}
// função que exibe os posts
function getPosts() {
    // return Object.values(posts)
    return posts
}
// função que pega post por id
function getPost(id) {
    return posts[id]
}
// função que apaga post 

function delPost(id) {
    const post = posts[id]
    delete posts[id]
    return post
}

module.exports = {delPost, getPost, getPosts, savePost}