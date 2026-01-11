
# MZJ Mobile Workspace 🚗📱

نظام إدارة متكامل ومحسن للهواتف المحمولة مخصص لشركة MZJ، لإدارة طلبات تصوير السيارات ونقلها بين الفروع والمستودعات بشكل لحظي.

## المميزات الرئيسية
- **تصميم Mobile-First**: واجهة مستخدم مريحة جداً للجوال بنظام البطاقات (Portrait Mode).
- **إدارة الطلبات**: تقسيم واضح بين "الطلبات النشطة" و"الأرشيف المكتمل" لتسهيل المتابعة.
- **تحديث المخزون التلقائي**: عند اكتمال عملية النقل، يتم تحديث موقع السيارة في المخزون العام فوراً (حل مشكلة التزامن).
- **نظام المراحل**: تتبع دقيق لـ (استلام الطلب -> إرسال السيارة -> استلام السيارة).
- **بحث ذكي**: إمكانية البحث والتعرف التلقائي على بيانات السيارة بمجرد إدخال رقم الشاصي (VIN).

## التقنيات المستخدمة
- **React**: لبناء الواجهات التفاعلية.
- **Tailwind CSS**: للتصميم العصري والسريع.
- **Firebase**: (Firestore & Auth) لقاعدة البيانات والتحكم في الدخول.
- **FontAwesome**: للأيقونات.

## كيفية التشغيل
1. قم برفع الملفات إلى مستودع GitHub الخاص بك.
2. تأكد من إعداد Firebase وتحديث الإعدادات في ملف `constants.ts` إذا لزم الأمر.
3. المشروع مصمم ليعمل بنظام ESM مباشرة عبر `index.html`.

---

# MZJ Mobile Workspace (English)

A comprehensive, mobile-optimized management system for MZJ to handle car photoshoot and transfer requests in real-time.

## Key Features
- **Mobile-First Design**: Intuitive UI with card-based layouts for easy mobile use.
- **Request Management**: Clear separation between "Active Requests" and "Completed Archive".
- **Auto Stock Sync**: Automatically updates car locations in the global inventory upon transfer completion.
- **Step-by-Step Tracking**: Detailed tracking of (Request Received -> Car Sent -> Car Received).
- **Smart VIN Recognition**: Auto-fills car details based on the VIN number from the stock database.

## Built With
- **React**
- **Tailwind CSS**
- **Firebase** (Firestore & Authentication)
- **FontAwesome Icons**
