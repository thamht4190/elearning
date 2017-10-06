import React, { Component } from 'react';

import Header from '../common/component.header';

const CONCEPTS = ['CS', 'NI', 'DA', 'AP', 'IC'];
const GRADES  = ['G2', 'G5', 'G8', 'G12'];
const CONCEPTSDATA = {
    CS: {
        title: 'Hệ thống máy tính',
        intro: 'Con người tương tác với nhiều thiết bị máy tính khác nhau có chức năng thu thập, lưu trữ, phân tích và xử lí thông tin theo những cách có thể thay đổi khả năng của con người theo cả hướng tích cực và tiêu cực. Các thành phần vật lý (hardware) và các hướng dẫn (phần mềm) tạo nên hệ thống máy tính giúp truyền tải và xử lý thông tin ở dạng số. Hiểu biết về phần cứng và phần mềm rất hữu ích khi hệ thống máy tính không hoạt động theo ý định.',
        grades: {
            G2: [
                { 
                    field: 'Thiết bị', 
                    intro: 'Con người sử dụng thiết bị máy tính để thực hiện nhiều nhiệm vụ yêu cầu chính xác và nhanh chóng. Các thiết bị máy tính giải nghĩa và thực hiện các hướng dẫn được đưa ra theo nghĩa đen.',
                    desc: 'Các thiết bị máy tính có thể được sử dụng để thực hiện một số việc như chơi nhạc, tạo tài liệu và gửi ảnh. Các thiết bị máy tính cũng rất chính xác, có thể thực hiện các phép tính toán phức tạp nhanh hơn và với độ chính xác cao hơn con người. Mặc dù người ta có thể phân tách các hướng dẫn được cung cấp cho họ, nhưng máy tính sẽ thực hiện chính xác như hướng dẫn đã được đưa ra, ngay cả khi máy tính không đạt được kết quả dự định.'
                },
                {
                    field: 'Phần cứng và phần mềm',
                    intro: 'Một hệ thống (thiết bị) máy tính bao gồm phần cứng và phần mềm. Phần cứng bao gồm các thành phần vật lý và phần mềm cung cấp hướng dẫn cho hệ thống chạy. Những hướng dẫn này được trình bày dưới dạng một máy tính có thể hiểu.',
                    desc: 'Ví dụ về phần cứng: màn hình để hiển thị thông tin, các nút, phím, chuột máy tính... Các ứng dụng phần mềm là các chương trình với các mục đích cụ thể, chẳng hạn như trình duyệt web hoặc trò chơi. Một người có thể sử dụng chuột (phần cứng) để nhấp vào nút được hiển thị trong một trình duyệt web (phần mềm) để điều hướng đến một trang web mới. Hệ thống máy tính sẽ chuyển các lệnh, chẳng hạn như "in", "lưu" hoặc "cắt" thành một ngôn ngữ đặc biệt mà máy tính có thể hiểu được. Ở cấp độ này, hiểu rằng thông tin máy tính được mã hóa là thích hợp, nhưng sự hiểu biết rõ ràng về "bit" được dành cho các cấp lớp sau này.'
                },
                {
                    field: 'Xử lí sự cố',
                    intro: 'Hệ thống máy tính có thể không hoạt động như mong đợi vì phần cứng hoặc phần mềm có vấn đề. Và mô tả được vấn đề là bước đầu tiên hướng tới việc tìm ra một giải pháp cho vấn đề đó.',
                    desc: 'Sự cố hệ thống máy tính thường do các nguyên nhân khác nhau từ cài đặt phần cứng, lỗi lập trình hoặc kết nối bị lỗi với các thiết bị/hệ thống khác... Cách thích hợp để giải quyết các vấn đề bao gồm gỡ lỗi các chương trình đơn giản và cố gắng mô tả rõ ràng vấn đề (ví dụ: "Máy tính sẽ không bật", "Con trỏ trên màn hình sẽ không di chuyển" hoặc "Tôi không vào được trang web). Tuổi này chưa cần phải chẩn đoán được hoặc khắc phục sự cố xảy ra.'
                },
            ]
        }
    }
}
class Wiki extends Component {

    render() {
        return (
            <div className="wiki-page">
                <Header />
                <div className="main-panel">
                    <div className="selector">
                        <div className="row">
                            <div className="col-md-1">Độ tuổi:</div>
                            <div className="col-md-5">
                                <select name="grade">
                                    <option value="G2">Mẫu giáo - Lớp 2</option>
                                    <option value="G5">Lớp 3 - Lớp 5</option>
                                    <option value="G8">Lớp 6 - Lớp 8</option>
                                    <option value="G12">Lớp 9 - Lớp 12</option>
                                </select>
                            </div>
                            <div className="col-md-1">Môn học</div>
                            <div className="col-md-5">
                                <select name="concept">
                                    <option value="CS">Hệ thống máy tính</option>
                                    <option value="NI">Mạng và Internet</option>
                                    <option value="DA">Dữ liệu và Phân tích dữ liệu</option>
                                    <option value="AP">Thuật toán và Lập trình</option>
                                    <option value="IC">Ứng dụng của máy tính</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="description">
                        { CONCEPTS.map(conceptId => {
                            var concept = CONCEPTSDATA[conceptId];
                            if (concept) return (
                                <div key={conceptId} className="concept-item">
                                    <div className="title"><h4>{concept.title}</h4></div>
                                    <div className="intro">{concept.intro}</div>
                                    <div className="grade-group">
                                        {GRADES.map(gradeId => {
                                            var grade = concept.grades[gradeId];
                                            if (grade) return (
                                                <div key={`${conceptId}_${gradeId}`} className="grade-item">
                                                    {grade.map((gradeItem, index) => {
                                                        return (
                                                            <div key={`${conceptId}_${gradeId}_${index}`}className="grade-field-item">
                                                                <div className="title">{gradeItem.field}</div>
                                                                <div className="intro">{gradeItem.intro}</div>
                                                                <div className="description">{gradeItem.desc}</div>
                                                            </div>
                                                        )
                                                    })}
                                                    
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Wiki;