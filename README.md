# EA · Effective Flange Width

Offline HTML calculator for effective flange width, EN 1992-1-1:2004 §5.3.2.1.

## ใช้งาน

ดาวน์โหลด **EA-Beff-Calculator.html** จาก [Releases](https://github.com/mixkung2540-ctrl/SL-T-Section-Beam-Width/releases/latest) แล้วเปิดด้วย Edge หรือ Chrome ไม่ต้องติดตั้ง

- กรอกข้อมูลโครงการ, Job No., ผู้คำนวณ และผู้ตรวจด้านซ้าย
- เพิ่มรายการคำนวณได้ตามต้องการ รองรับ T / L section และขนาดคานต่างกัน
- Save project เก็บข้อมูลเป็นไฟล์ และ Open project เพื่อใช้งานต่อ
- Print / PDF: เลือก A4 และปิด Headers and footers เพื่อตัดวันที่และพาธไฟล์ของเบราว์เซอร์
- Update เชื่อมกับ repository นี้โดยตรง เมื่อมีรุ่นใหม่ ให้ Save project ก่อนดาวน์โหลดและเปิด HTML รุ่นใหม่

โปรแกรมคำนวณเฉพาะ beff ไม่คำนวณแรงภายใน เหล็กเสริม หรือการโก่งตัว วิศวกรต้องตรวจสอบข้อมูลและความเหมาะสมของการนำผลไปใช้

## Build and release

Run `node build.cjs` (no additional packages required). The supplied logo is embedded into the standalone HTML.

To publish a new version, update the version in `src/app.template.html` and push to `main`. The release workflow builds and attaches the HTML to a versioned GitHub Release. Existing release tags are not overwritten.

## 0.2.3

- Report text is black in preview, exported HTML and printed PDF.
- Reports show the cross-section and calculation steps without the beff–l0 relationship chart. The interactive workspace chart is unchanged.
- Existing border, background, logo and diagram colours are retained.
- Calculation logic and project file format are unchanged.

## 0.2.2

- Visible Job No. and Checked by fields alongside Calculated by.
- Project metadata persists in saved projects and appears in report headers.
- Update repository fixed to this project; no manual URL required.
- Existing beff calculation method unchanged.
