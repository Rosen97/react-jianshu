import {fromJS} from 'immutable'

const defaultStore = fromJS({
    topicList: [
        {
            id: 1,
            title: '社会热点',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/13490610-31c5384c54bad00f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 2,
            title: '美术摄影',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/13490610-31c5384c54bad00f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 3,
            title: '文艺电影',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/13490610-31c5384c54bad00f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 4,
            title: '读书',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/13490610-31c5384c54bad00f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 5,
            title: '旅行在路上',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/13490610-31c5384c54bad00f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 6,
            title: '历史',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/13490610-31c5384c54bad00f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        }
    ],
    articleList: [
        {
            id: 1,
            title: '我43岁，写故事6个月，稿费10280元',
            content: '来源微信公众号：汤小小轻松高效写作，如需转载请联系该公众号，谢谢。 01 女贞姐说过一句话，令我记忆犹深。 她说，如果你写到三十万字，肯定会有编...',
            imgUrl: '//upload-images.jianshu.io/upload_images/13370728-91eee484cf53c6d7.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
            author: '木木爱电影',
            commentCount: 49,
            lovedCount: 110
        },
        {
            id: 2,
            title: '经验分享：经营女神朋友圈赚钱，做男粉产品月入3万+',
            content: '网络赚钱这个领域最多的就是男粉，毕竟和创业和赚钱相关，很多男性是比较关注这方面的，可以说百分之80都是男性，但是，并不是多少人都能够从中赚到钱',
            imgUrl: '//upload-images.jianshu.io/upload_images/13370728-91eee484cf53c6d7.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
            author: '灰产圈',
            commentCount: 49,
            lovedCount: 110
        },
        {
            id: 3,
            title: '经验分享：经营女神朋友圈赚钱，做男粉产品月入3万+',
            content: '网络赚钱这个领域最多的就是男粉，毕竟和创业和赚钱相关，很多男性是比较关注这方面的，可以说百分之80都是男性，但是，并不是多少人都能够从中赚到钱',
            imgUrl: '//upload-images.jianshu.io/upload_images/13370728-91eee484cf53c6d7.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
            author: '灰产圈',
            commentCount: 49,
            lovedCount: 110
        },
        {
            id: 4,
            title: '经验分享：经营女神朋友圈赚钱，做男粉产品月入3万+',
            content: '网络赚钱这个领域最多的就是男粉，毕竟和创业和赚钱相关，很多男性是比较关注这方面的，可以说百分之80都是男性，但是，并不是多少人都能够从中赚到钱',
            imgUrl: '//upload-images.jianshu.io/upload_images/13370728-91eee484cf53c6d7.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
            author: '灰产圈',
            commentCount: 49,
            lovedCount: 110
        },
        {
            id: 5,
            title: '经验分享：经营女神朋友圈赚钱，做男粉产品月入3万+',
            content: '网络赚钱这个领域最多的就是男粉，毕竟和创业和赚钱相关，很多男性是比较关注这方面的，可以说百分之80都是男性，但是，并不是多少人都能够从中赚到钱',
            imgUrl: '//upload-images.jianshu.io/upload_images/13370728-91eee484cf53c6d7.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
            author: '灰产圈',
            commentCount: 49,
            lovedCount: 110
        }
    ],
    recommendList: [
        {
            id: 1,
            href: 'https://www.jianshu.com/trending/weekly?utm_medium=index-banner-s&utm_source=desktop',
            imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
        },
        {
            id: 2,
            href: 'https://www.jianshu.com/trending/weekly?utm_medium=index-banner-s&utm_source=desktop',
            imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
        },
        {
            id: 3,
            href: 'https://www.jianshu.com/trending/weekly?utm_medium=index-banner-s&utm_source=desktop',
            imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
        },
        {
            id: 4,
            href: 'https://www.jianshu.com/trending/weekly?utm_medium=index-banner-s&utm_source=desktop',
            imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
        },
        {
            id: 5,
            href: 'https://www.jianshu.com/trending/weekly?utm_medium=index-banner-s&utm_source=desktop',
            imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
        }
    ],
    writerList: [
        {
            id: 1,
            imgUrl: '//upload.jianshu.io/users/upload_avatars/1908904/3c3f3326bb95.gif?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
            name: '极小光',
            codeCount: 64,
            lovedCount: 7
        },
        {
            id: 2,
            imgUrl: '//upload.jianshu.io/users/upload_avatars/1752490/3d4b5a2d-f01e-47be-8390-108e55a2060a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
            name: '昨夜一一我与树交谈 ',
            codeCount: 111.8,
            lovedCount: 11
        },
        {
            id: 3,
            imgUrl: '//upload.jianshu.io/users/upload_avatars/8756340/bba344b1-def2-47cd-9cd3-ab25cc38cf68.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
            name: '张雪Victoria',
            codeCount: 68.1,
            lovedCount: 92
        },
        {
            id: 4,
            imgUrl: '//upload.jianshu.io/users/upload_avatars/1900737/ae98d120-61da-4195-9987-616626a30484.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
            name: '爱写诗的金先生',
            codeCount: 44.7,
            lovedCount: 403
        }
    ]
})

export default (state = defaultStore, action) => {
    switch (action.type) {
        default: 
            return state
    }
}