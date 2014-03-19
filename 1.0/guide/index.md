## 综述

TbVideoPlayerH5是基于HTML5的`video`标签生成视频的组件，仅支持手机端（支持mp4格式的浏览器理论上都支持）和PC端高级浏览器，其他浏览器不保证有效。

* 版本：1.0
* 作者：岳松
* demo：[http://gallery.kissyui.com/tb-video-player-h5/1.0/demo/index.html](http://gallery.kissyui.com/tb-video-player-h5/1.0/demo/index.html)

## 初始化组件

    S.use('gallery/tb-video-player-h5/1.0/index', function (S, TbVideoPlayerH5) {
        var _player = new TbVideoPlayerH5({
			container: '#video',
            vid: '10548613',
            callback: function(player){
                console.log(player);
            },
            poster: 'http://img01.taobaocdn.com/tps/i1/T1AX1XFf8aXXcXDmLh-460-290.png'
        });
    })

## API说明

### Configs Detail

1. `container` (String, default=body)
选填，播放器插入的容器，默认为`body`，支持选择器或者DOM、Node对象

2. `vid` (Number or String)
必填，视频的id，在<http://ugc.taobao.com/>能查到（在复制代码中查看）

3. `uid` (Number or String, default=727053408)
选填，视频上传者的id，无需特殊指定，如有特殊需求，也可在上面地址内查到

4. `autoplay` (Boolean, default=false)
选填，是否自动播放视频，IOS系列和部分Android设置无效，PC正常

5. `width` (String, default=100%)
选填，视频播放器宽度，须自带单位

6. `height` (String, default=100%)
选填，视频播放器高度，须自带单位

7. `daily` (Boolean, default=false)
选填，指定当前环境是否为日常

8. `poster` (String, default='')
选填，视频封面图片地址，仅在非自动播放情况下有效

9. `callback` (Function, default=function(){})
选填，插入视频节点后的回调，支持一个player参数（播放器对应的Dom节点）

### Methods

1. `destroy()`
销毁淘宝视频播放器

2. `play()`
播放（继续播放）淘宝视频播放器

3. `pause()`
暂停淘宝视频播放器