<template>
    <div class="main">
        <el-row>
            <el-col :span="5">
                <LeftBanner />
            </el-col>
            <el-col :span="19">
                <RightBanner />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <container :Data="qualityData"/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import mockqualityData from '@/mock/container/mockquality-container'
import LeftBanner from '@/components/main/banner/Left-banner'
import RightBanner from '@/components/main/banner/Right-banner'
import Container from '@/components/main/container/Container'
export default {
    data(){
        return{
          qualityData: mockqualityData
        }
    },
    components:{
        LeftBanner,
        RightBanner,
        Container
    }
}
</script>