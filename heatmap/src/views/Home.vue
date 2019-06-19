<template>
    <div class="viewer">
        <cesium-viewer @ready="ready" >
            <cesium-heatmap ref="heatMap" :bounds="bounds" :options="options" :min="min" :max="max" :data="data">
            </cesium-heatmap>
        </cesium-viewer>
    </div>
</template>
<script>
    import heatData from '../assets/data/19042808_t.json'

    export default {
        data() {
            return {
                bounds: {west: 106.18333333333334, south: 29.15, east: 97.51666666666667, north: 21.133333333333333},
                options: {
                    backgroundColor: 'rgba(0,0,0,0)',
                    gradient: {
                        // enter n keys between 0 and 1 here
                        // for gradient color customization
                        '0.9': 'red',
                        '0.8': 'orange',
                        '0.7': 'yellow',
                        '0.5': 'blue',
                        '0.3': 'green'
                    },
                    // minCanvasSize: 10,
                    // maxCanvasSize: 100,
                    radius: 250,
                    maxOpacity: 0.5,
                    minOpacity: 0,
                    blur: 0.75
                },
                data: [],
                min: 0,
                max: 0,
                cesiumInstance: {},
            }
        },
        methods: {
            ready(cesiumInstance) {
                this.cesiumInstance = cesiumInstance
                const {Cesium, viewer} = this.cesiumInstance
                viewer.camera.setView({
                    destination: new Cesium.Cartesian3(-1432246.8223880068, 5761224.588247942, 3297281.1889481535),
                    orientation: {
                        heading: 6.20312220367255,
                        pitch: -0.9937536846355606,
                        roll: 0.002443376981836387
                    }
                })
                /* home start */
                let imageryWgs;
                let imageryYxs;
                let imageryLayers = viewer.imageryLayers;
                let baseImagery = new Cesium.TiandituImageryProvider({
                    credit : new Cesium.Credit('天地图全球影像服务     数据来源：国家地理信息公共服务平台 & 四川省测绘地理信息局'),
                    url:"http://[subdomain].tianditu.com/img_w/wmts?tk=0a65163e2ebdf5a37abb7f49274b85df"
                    // tk 来自http://lbs.tianditu.gov.cn/
                })
                let labelImagery = new Cesium.TiandituImageryProvider({
                    mapStyle: Cesium.TiandituMapsStyle.CIA_C, // 天地图全球中文注记服务（经纬度投影）
                    url: 'http://[subdomain].tianditu.com/cia_c/wmts?tk=0a65163e2ebdf5a37abb7f49274b85df'
                    // tk 来自http://lbs.tianditu.gov.cn/
                });
                imageryYxs = imageryLayers.addImageryProvider(baseImagery);
                imageryYxs.alpha = 1;
                imageryWgs = imageryLayers.addImageryProvider(labelImagery);
                imageryWgs.alpha = 2;
                /* home end */
                let _this = this
                _this.bounds = {
                    west: heatData.left,
                    south: heatData.bottom,
                    east: heatData.right,
                    north: heatData.top
                }
                _this.min = heatData.min
                _this.max = heatData.max
                _this.data = heatData.datas
            },
        }
    }
</script>