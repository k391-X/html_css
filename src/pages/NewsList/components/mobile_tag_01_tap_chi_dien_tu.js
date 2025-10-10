import expand_down from "../../../assets/icons/expand_down.svg";
import expand_down_black from "../../../assets/icons/expand_more_24px.svg";
import contact from "../../../assets/icons/contact_support_24px.svg";
import dau from "../../../assets/icons/dau.svg";
import visibility from "../../../assets/icons/visibility_24px.svg";
import shopping_cart_black from "../../../assets/icons/add_shopping_cart_24px.svg";

export default function MobileTag01() {
  const html = `
        <div class="flex items-center mt-2">   
            <div class="font-[700] text-[18px] text-[#2BBEF9]">
                Danh mục sách / Tạp chí
            </div>
        
            <div class="ml-6 cursor-pointer">
                <img 
                    src="${expand_down}" 
                    alt="demo" 
                    class="w-6 h-6 custom-img-zoom cursor-pointer ml-2" 
                />
            </div>
        </div>
        <div class="flex py-6 pl-4 w-full">
            <ul class="list-disc list-inside space-y-1 text-[#18364D] text-left text-[14px] font-[500] list-hover !pl-0 w-full">
            <div class="flex justify-between items-center cursor-pointer check-container">
                <div>
                    <li>Tạp chí khoa học Tự nhiên (17)</li>
                </div>
                <div>
                    <label class="custom-checkbox custom-checkbox-chi-tiet-tcdt">
                    <input type="checkbox" name="Khoa học tự nhiên">
                    <span class="checkmark"></span>
                    </label>
                </div>
            </div>
            <div class="flex justify-between items-center cursor-pointer check-container">
                <div>
                    <li>Tạp chí Khoa học Xã hội (19)</li>
                </div>
                <div>
                    <label class="custom-checkbox custom-checkbox-chi-tiet-tcdt">
                    <input type="checkbox" name="Khoa học xã hội">
                    <span class="checkmark"></span>
                    </label>
                </div>
            </div>

            <div class="flex justify-between items-center cursor-pointer check-container">
                <div>
                    <li>Tạp chí Khoa học Giáo dục (19)</li>
                </div>
                <div>
                    <label class="custom-checkbox custom-checkbox-chi-tiet-tcdt">
                    <input type="checkbox" name="Khoa học giáo dục">
                    <span class="checkmark"></span>
                    </label>
                </div>
            </div>
        
            <div class="flex justify-between items-center cursor-pointer check-container">
                <div>
                    <li>Sách nghiên cứu (19)</li>
                </div>
                <div>
                    <label class="custom-checkbox custom-checkbox-chi-tiet-tcdt">
                    <input type="checkbox" name="Sách nghiên cứu">
                    <span class="checkmark"></span>
                    </label>
                </div>
            </div>

            <div class="flex justify-between items-center cursor-pointer check-container">
                <div>
                    <li>Sách khác (19)</li>
                </div>
                <div>
                    <label class="custom-checkbox custom-checkbox-chi-tiet-tcdt">
                    <input type="checkbox">
                    <span class="checkmark"></span>
                    </label>
                </div>
            </div>
            </ul>
        </div>

        <!-- Phần tác giả -->
        <div class="flex items-center mt-2">   
            <div class="font-[500] text-[16px] text-[#2BBEF9]">
                Tác giả
            </div>
        </div>

        <div class="flex py-6 pl-4 w-full">
            <ul class="list-disc list-inside space-y-1 text-[#18364D] text-left text-[14px] font-[500] list-hover !pl-0 w-full">
            <div class="flex justify-between items-center cursor-pointer check-container">
                <div>
                    <li>Tên tác giả 1 (19)</li>
                </div>
                <div>
                    <label class="custom-checkbox custom-checkbox-chi-tiet-tcdt">
                    <input type="checkbox" name="Tên tác giả 1">
                    <span class="checkmark"></span>
                    </label>
                </div>
            </div>
            <div class="flex justify-between items-center cursor-pointer check-container">
                <div>
                    <li>Tên tác giả 2 (19)</li>
                </div>
                <div>
                    <label class="custom-checkbox custom-checkbox-chi-tiet-tcdt">
                    <input type="checkbox" name="Tên tác giả 2">
                    <span class="checkmark"></span>
                    </label>
                </div>
            </div>
            <div class="flex justify-between items-center cursor-pointer check-container">
                <div>
                    <li>Tên tác giả 3 (19)</li>
                </div>
                <div>
                    <label class="custom-checkbox custom-checkbox-chi-tiet-tcdt">
                    <input type="checkbox" name="Tên tác giả 3">
                    <span class="checkmark"></span>
                    </label>
                </div>
            </div>
            <div class="flex justify-between items-center cursor-pointer check-container">
                <div>
                    <li>Tên tác giả 4 (19)</li>
                </div>
                <div>
                    <label class="custom-checkbox custom-checkbox-chi-tiet-tcdt">
                    <input type="checkbox" name="Tên tác giả 4">
                    <span class="checkmark"></span>
                    </label>
                </div>
            </div>
            <div class="flex justify-between items-center cursor-pointer check-container">
                <div>
                    <li>Tên tác giả 5 (19)</li>
                </div>
                <div>
                    <label class="custom-checkbox custom-checkbox-chi-tiet-tcdt">
                    <input type="checkbox" name="Tên tác giả 5">
                    <span class="checkmark"></span>
                    </label>
                </div>
            </div>
            </ul>
        </div>


        <!-- Phần Số và Năm -->
        <div class="flex items-center justify-start mt-2">  
            <div class="w-[50%]"> 
                <div class="font-[500] text-[16px] text-[#2BBEF9] text-left">
                    Số
                </div>

                <div class="flex items-center p-4">
                    <div class="">
                        06
                    </div>
                    <div class="ml-4">
                        <img 
                            src="${expand_down_black}" 
                            alt="demo" 
                            class="w-6 h-6 custom-img-zoom cursor-pointer ml-2 fill-[#656565]" 
                        />
                    </div>
                </div>
            </div>

            <div class="w-[50%]"> 
                <div class="font-[500] text-[16px] text-[#2BBEF9] text-left">
                    Năm
                </div>

                <div class="flex items-center p-4">
                    <div class="">
                        2025
                    </div>
                    <div class="ml-4">
                        <img 
                            src="${expand_down_black}" 
                            alt="demo" 
                            class="w-6 h-6 custom-img-zoom cursor-pointer ml-2 fill-[#656565]" 
                        />
                    </div>
                </div>
            </div>
        </div>

        <!-- Phần tiêu chí -->
        <div class="flex items-center mt-2">   
            <div class="font-[500] text-[16px] text-[#2BBEF9]">
                Tiêu chí
            </div>
        </div>

        <div class="py-6">
            <div class="flex items-center justify-between cursor-pointer check-container">
                <div class="flex items-center list-hover-div">
                    <img 
                        src="${visibility}" 
                        alt="demo" 
                        class="w-6 h-6 custom-img-zoom cursor-pointer ml-2 fill-[#656565]" 
                    />
                    <div class="ml-3">
                        Xem nhiều nhất
                    </div>
                </div>

                <div>
                    <label class="custom-checkbox custom-checkbox-chi-tiet-tcdt">
                    <input type="checkbox" name="Xem nhiều nhất">
                    <span class="checkmark"></span>
                    </label>
                </div>
            </div>

            <div class="flex items-center justify-between mt-4 cursor-pointer check-container">
                <div class="flex items-center list-hover-div">
                    <img 
                        src="${shopping_cart_black}" 
                        alt="demo" 
                        class="w-6 h-6 custom-img-zoom cursor-pointer ml-2 fill-[#656565]" 
                    />
                    <div class="ml-3">
                        Nhiều lượt mua nhất
                    </div>
                </div>

                <div>
                        <label class="custom-checkbox custom-checkbox-chi-tiet-tcdt">
                        <input type="checkbox" name="Nhiều lượt mua nhất">
                        <span class="checkmark"></span>
                        </label>
                </div>
            </div>

            <div class="flex items-center justify-between mt-4 cursor-pointer check-container">
                <div class="flex items-center list-hover-div">
                    <div class="relative">
                        <img 
                            src="${contact}" 
                            alt="demo" 
                            class="w-6 h-6 custom-img-zoom cursor-pointer ml-2 fill-[#656565]" 
                        />
                        <img 
                            src="${dau}" 
                            alt="demo" 
                            class="w-2 h-2 custom-img-zoom cursor-pointer ml-2 fill-[#656565] absolute top-2 left-2" 
                        />
                    </div>
                    <div class="ml-3">
                        Nhiều trích dẫn nhất
                    </div>
                </div>

                <div>
                    <label class="custom-checkbox custom-checkbox-chi-tiet-tcdt">
                    <input type="checkbox" name="Nhiều trích dẫn nhất">
                    <span class="checkmark"></span>
                    </label>
                </div>
            </div>
        </div>
    `;

  return html;
}
