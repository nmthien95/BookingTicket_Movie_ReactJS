import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import {
  DANG_NHAP,
  DANG_XUAT,
  SET_THONG_TIN_NGUOI_DUNG,
} from "../types/QuanLyNguoiDungType";
let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}
const stateDefault = {
  userLogin: user,
  thongTinNguoiDung: {},
};
export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DANG_NHAP: {
      console.log(action);

      const { thongTinDangNhap } = action;
      console.log("thongTinDangNhap: ", thongTinDangNhap);

      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
      localStorage.setItem(TOKEN, thongTinDangNhap.accessToken);

      return { ...state, userLogin: thongTinDangNhap };
    }
    case DANG_XUAT: {
      localStorage.removeItem(USER_LOGIN);
      localStorage.removeItem(TOKEN);

      return { ...state, userLogin: "" };
    }
    case SET_THONG_TIN_NGUOI_DUNG: {
      state.thongTinNguoiDung = action.thongTinNguoiDung;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
