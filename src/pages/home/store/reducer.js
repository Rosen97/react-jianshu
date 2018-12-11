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
            title: '摄影',
            imgUrl: 'https://upload-images.jianshu.io/upload_images/13490610-31c5384c54bad00f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        }
    ]
})

export default (state = defaultStore, action) => {
    switch (action.type) {
        default: 
            return state
    }
}