KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('tb-video-player-h5', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/tb-video-player-h5/2.0.0/']});