let token = null

const blogs = [
    {
        _id: "5a92d73e33c8eb4950d453f8",
        title: "testi blogi 1",
        author: "testi blogaaja 1",
        url: "google.com",
        likes: 15,
        user: {
            _id: "5a92d5a1e7b96733a819f595",
            username: "kayttaja1",
            name: "tester123"
        },
        __v: 0
    },
    {
        _id: "5a92dbfea5df5f12b869c26c",
        title: "testi blogi 1",
        author: "testi blogaaja 1",
        url: "google.com",
        likes: 4,
        user: {
            _id: "5a92d5a1e7b96733a819f595",
            username: "kayttaja1",
            name: "tester123"
        },
        __v: 0
    },
    {
        _id: "5a9bdb2d83a44a547841f4b0",
        title: "FrontTest1",
        author: "FrontTestaaja",
        url: "asdf.com/qwerty",
        likes: 9,
        user: {
            _id: "5a92e4934bd69659c8438fa7",
            username: "eriKayttaja",
            name: "tester123"
        },
        __v: 0
    },
    {
        _id: "5a9bdd8783a44a547841f4b1",
        title: "NewBlog1",
        author: "Author1",
        url: "url1",
        likes: 6,
        user: {
            _id: "5a92e4934bd69659c8438fa7",
            username: "eriKayttaja",
            name: "tester123"
        },
        __v: 0
    },
    {
        _id: "5a9bdda783a44a547841f4b2",
        title: "NewBlog2",
        author: "NewAuthor2",
        url: "newUrl2",
        likes: 4,
        user: {
            _id: "5a92e4934bd69659c8438fa7",
            username: "eriKayttaja",
            name: "tester123"
        },
        __v: 0
    },
    {
        _id: "5a9be3de83a44a547841f4b3",
        title: "Asdf",
        author: "qwerty",
        url: "zxcv",
        likes: 4,
        user: {
            _id: "5a92e4934bd69659c8438fa7",
            username: "eriKayttaja",
            name: "tester123"
        },
        __v: 0
    },
    {
        _id: "5a9be44383a44a547841f4b4",
        title: "Test",
        author: "1",
        url: "2",
        likes: 4,
        user: {
            _id: "5a92e4934bd69659c8438fa7",
            username: "eriKayttaja",
            name: "tester123"
        },
        __v: 0
    },
    {
        _id: "5a9bed9783a44a547841f4b5",
        title: "testi blogi 1",
        author: "testi blogaaja 1",
        url: "google.com",
        likes: 5,
        user: {
            _id: "5a92e4934bd69659c8438fa7",
            username: "eriKayttaja",
            name: "tester123"
        },
        __v: 0
    },
    {
        _id: "5a9bf347e1631f1c043f4933",
        title: "a",
        author: "b",
        url: "c",
        likes: 4,
        user: {
            _id: "5a92e4934bd69659c8438fa7",
            username: "eriKayttaja",
            name: "tester123"
        },
        __v: 0
    },
    {
        _id: "5a9c0bc9ac4f433184785e61",
        title: "AsdfQwerty vs Lorem Ipsum",
        author: "Joku idiootti",
        url: "dead tree only, sorry",
        likes: 0,
        user: {
            _id: "5a9bfe75ac4f433184785e5f",
            username: "oemkulma",
            name: "Oskari Kulmala"
        },
        __v: 0
    }
]

const getAll = () => {
    return Promise.resolve(blogs)
}

const setToken = (token) => {
    return
}

export default {getAll, blogs, setToken}