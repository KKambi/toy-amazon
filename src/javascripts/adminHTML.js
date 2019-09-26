const adminHTML = {
    link: {
        user: 
            `<div id="content-container">
                <div class="content-wrapper">
                    <div class="content-title">사용자</div>
                    
                    <div class="content-index">
                        <div class="content-index-button" data-body-type="read_user">사용자조회</div>
                        <div class="content-index-button" data-body-type="update_admin">관리자설정</div>
                    </div>
                    
                    <div class="content-body">
                    </div>
                </div>
            </div>`,
        carousel: 
            `<div id="content-container">
                <div class="content-wrapper">
                    <div class="content-title">카로셀</div>
                    
                    <div class="content-index">
                        <div class="content-index-button" data-body-type="read_carousel">카로셀조회</div>
                        <div class="content-index-button" data-body-type="create-carousel">카로셀생성</div>
                    </div>
                    
                    <div class="content-body">
                    </div>
                </div>
            </div>`,
        item: 
            `<div id="content-container">
                <div class="content-wrapper">
                    <div class="content-title">아이템</div>
                    
                    <div class="content-index">
                        <div class="content-index-button" data-body-type="read-item">아이템조회</div>
                        <div class="content-index-button" data-body-type="create-user">아이템생성</div>
                    </div>
                    
                    <div class="content-body">
                    </div>
                </div>
            </div>`
    },
    body: {
        read_user:
            `test
            `,
        create_user:
            `
            `,
        read_carousel:
            `
            `,
        create_carousel:
            `
            `,
        read_item:
            `
            `,
        create_item:
            `
            `,
    }
}

export default adminHTML;