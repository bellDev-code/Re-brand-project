<template>
  <div>
        <!-- Banner Area -->
        <section id="common_banner_one">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="common_banner_text">
                            <h2>{{this.title}}</h2>
                            <b-breadcrumb :items="breadcrumbItems" class="bg-transparent"></b-breadcrumb>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Privacy-Area -->
        <section id="privacy-policy_area" class="ptb-100">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="privacy_content">
                        <h2>개인정보취급방침</h2>
                        <div class="privacy_policy_text">
                            <h3>개인정보</h3>
                            <p>'개인정보보호법, 정보통신망이용촉진및정보보호등에 관한법률' 등 모든 관련 법규를 준수하기 위하여 개인정보취급방침을 영업장에 비치하거나 <br>
                            홈페이지에 공개하여 고객이 언제나 용이하게 열람할 수 있도록 하고 있습니다.</p>
                            <p>생존하는 개인에 관한 정보로서 당해 정보에 포함되어 있는 성명, 주민등록번호 등의 사항에 의하여 <br>
                            당해 개인을 식별할 수 있는 정보(당해 정보만으로는 특정 개인을 식별할 수 없더라도 다른 정보와 용이하게 결합하여 식별할 수 있는 것을 포함한다)를 말합니다.</p>
                        </div>
                        <div class="privacy_policy_text">
                            <h3>미디어</h3>
                            <p>웹사이트에 이미지를 업로드하는 경우 위치 데이터가 포함된 이미지 업로드를 피해야 합니다. <br>
                            웹사이트의 이미지는 본사의 정보이므로 무단 탈취 및 다운로드를 하는 경우 법적인 조치를 할 수 있습니다.</p>
                        </div>
                        <div class="privacy_policy_text">
                            <h3>쿠키 데이터</h3>
                            <p>당사 사이트에 댓글을 남기면 이름, 이메일 주소 및 웹사이트를 쿠키에 저장하도록 선택할 수 있습니다.<br> 
                            이것은 귀하의 편의를 위한 것으로 다른 의견을 남길 때 세부 정보를 다시 입력하지 않아도 됩니다. <br>
                            이 쿠키는 1년 동안 지속됩니다.</p>
                            <p>계정이 있고 이 사이트에 로그인하면 브라우저가 쿠키를 허용하는지 확인하기 위해 임시 쿠키를 설정합니다. <br>
                            이 쿠키에는 개인 데이터가 포함되어 있지 않으며 브라우저를 닫으면 삭제됩니다.</p>
                            <p>귀하가 로그인할 때 귀하의 로그인 정보와 화면 표시 선택을 저장하기 위해 여러 쿠키도 설정합니다. <br>
                            로그인 쿠키는 2일 동안, 화면 옵션 쿠키는 1년 동안 지속됩니다. <br>
                            "기억하기"를 선택하면 로그인이 2주 동안 유지됩니다. <br>
                            계정에서 로그아웃하면 로그인 쿠키가 제거됩니다.</p>
                            <p>게시글을 편집하거나 게시하면 브라우저에 추가 쿠키가 저장됩니다. <br>
                            이 쿠키는 개인 데이터를 포함하지 않으며 방금 편집한 기사의 게시물 ID를 나타냅니다. 1일 후에 만료됩니다.</p>
                        </div>
                        <div class="privacy_policy_text">
                            <h3>타 사이트의 데이터</h3>
                            <p>이 사이트의 게시글에는 콘텐츠(예: 비디오, 이미지, 기사 등)가 포함될 수 있습니다. <br>
                            다른 웹사이트의 포함된 콘텐츠는 방문자가 다른 웹사이트를 방문한 것과 똑같은 방식으로 작동합니다.</p>
                            <p>이러한 웹사이트는 귀하에 대한 데이터를 수집하고, 쿠키를 사용하고, 추가 제3자 추적을 포함하고, <br>
                            계정이 있고 해당 웹사이트에 로그인한 경우 포함된 콘텐츠와의 상호 작용 추적을 포함하여 포함된 콘텐츠와의 상호 작용을 모니터링할 수 있습니다.</p>
                        </div>
                        <div class="privacy_policy_text">
                            <h3>데이터 수집기간</h3>
                            <p>사진과 영상 및 댓글을 남기면 해당 데이터가 본사에 무기한 유지됩니다.</p>
                            <p>웹사이트에 등록한 사용자(있는 경우)의 경우 사용자 프로필에 제공한 개인 정보도 저장합니다. <br>
                            모든 사용자는 언제든지 자신의 개인 정보를 보거나 편집하거나 삭제할 수 있습니다(사용자 이름을 변경할 수 없는 경우 제외). <br>
                            특정한 경우 웹 사이트 관리자도 해당 정보를 수정 및 편집할 수 있습니다.</p>
                        </div>
                        <div class="privacy_policy_text">
                            <h3>귀하의 데이터에 대한 권리</h3>
                            <p>이 사이트에 계정이 있거나 의견을 남긴 경우 귀하가 당사에 제공한 모든 데이터를 포함하여 귀하에 대해 보유하고 있는 개인 데이터의 내보낸 파일 수신을 요청할 수 있습니다. <br>
                            또한 귀하에 대해 보유하고 있는 모든 개인 데이터를 삭제하도록 요청할 수 있습니다. 여기에는 관리, 법률 또는 보안 목적으로 보관해야 하는 데이터는 포함되지 않습니다.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </div>
</template>

<script>
export default {
    name: 'privacy-policy',
    
    data() {
        return {

            title: 'Privacy Policy',

            // Breadcrumb Items Data
            breadcrumbItems: [
                {
                    text: 'Home',
                    to: '/'
                },
                {
                    text: 'Privacy Policy'
                }
            ],

        }
    },

    // Page head() Title, description for SEO 
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Privacy Policy page - AndShop Ecommerce Vue js, Nuxt js Template'
          }
        ]
      }
    }

}
</script>

<style>

</style>