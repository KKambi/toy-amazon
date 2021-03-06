const adminHTML = {
    index: () =>        
        `<div id="content-container">
            <div class="content-wrapper">
                <div class="content-title">원하는 작업을 클릭하세요</div>
            </div>
        </div>`,
    link: {
        user: () =>
            `<div id="content-container">
                <div class="content-wrapper">
                    <div class="content-title">사용자</div>
                    
                    <div class="content-index">
                        <a class="content-index-button" data-body-type="read_user">사용자조회</a>
                        <a class="content-index-button" data-body-type="create_admin">관리자지정</a>
                        <a class="content-index-button" data-body-type="destroy_admin">관리자해임</a>
                    </div>
                    
                    <div class="content-body">
                    </div>
                </div>
            </div>`,
        carousel: () =>
            `<div id="content-container">
                <div class="content-wrapper">
                    <div class="content-title">카로셀</div>
                    
                    <div class="content-index">
                        <a class="content-index-button" data-body-type="read_carousel">카로셀조회</a>
                        <a class="content-index-button" data-body-type="create_carousel">카로셀생성</a>
                    </div>
                    
                    <div class="content-body">
                    </div>
                </div>
            </div>`,
        item: () =>
            `<div id="content-container">
                <div class="content-wrapper">
                    <div class="content-title">아이템</div>
                    
                    <div class="content-index">
                        <a class="content-index-button" data-body-type="read_item">아이템조회</a>
                        <a class="content-index-button" data-body-type="create_item">아이템생성</a>
                    </div>
                    
                    <div class="content-body">
                    </div>
                </div>
            </div>`
    },
    body: {
        row: (value) => {
            return `<td>${value}</td>`
        },
        read_user: (rows) => {
            return `<table border="1" style="border-collapse: separate; border-spacing: 1rem 1rem;">
                <th>번호</th>
                <th>아이디</th>
                <th>이름</th>
                <th>생년월일</th>
                <th>성별</th>
                <th>이메일</th>
                <th>휴대전화</th>
                <th>관심사</th>
                <th>관리자</th>
                ${rows}
            </table>`
        },
        read_carousel: (rows) => {
            return `<table border="1" style="border-collapse: separate; border-spacing: 1rem 1rem;">
                        <th>번호</th>
                        <th>이름</th>
                        ${rows}
                    </table>`
        },
        read_item: (rows) => {
            return `<table border="1" style="border-collapse: separate; border-spacing: 1rem 1rem;">
                        <th>번호</th>
                        <th>이름</th>
                        <th>카로셀번호</th>
                        <th>url</th>
                        ${rows}
                    </table>`
        },
        create_admin: () => {
            return `<div class="body-title">
                        관리자로 임명하고 싶은 유저아이디를 입력하세요
                    </div>
                    <form action="/api/users/admin/create" method="post">
                        <div>
                            <label for="user_id">아이디:</label>
                            <input type="text" name="user_id" id="user_id" />
                        </div>
                        <button type="submit">임명</button>
                    </form>`
        },
        destroy_admin: () => {
            return `<div class="body-title">
                        관리자에서 해임하고 싶은 유저아이디를 입력하세요
                    </div>
                    <form action="/api/users/admin/destroy" method="post">
                        <div>
                            <label for="user_id">아이디:</label>
                            <input type="text" name="user_id" id="user_id" />
                        </div>
                        <button type="submit">해임</button>
                    </form>`
        },
        create_carousel: () => {
            return `<div class="body-title">
                        생성할 카로셀 정보를 입력하세요
                    </div>
                    <form action="/api/carousels/create" method="post">
                        <div>
                            <label for="name">이름:</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <button type="submit">생성</button>
                    </form>`
        },
        create_item: () => {
            return `<div class="body-title">
                        생성할 아이템 정보를 입력하세요
                    </div>
                    <form action="/api/items/create" method="post" enctype=multipart/form-data>
                        <div>
                            <label for="carousel_id">카로셀번호:</label>
                            <input type="text" name="carousel_id" id="carousel_id" />
                        </div>
                        <div>
                            <label for="image">이미지</label>
                            <input type="file" name="image" id="image">
                        </div>
                        <button type="submit">생성</button>
                    </form>`
        }
    }
}

module.exports = {
    adminHTML
}