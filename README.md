# flatpickr wrap

flatpickr-wrap is a lightweight Date wrapper for flatpickr

> This project is based on [`flatpickr`](https://www.npmjs.com/package/flatpickr), which combined with [`native-date-adapter`](https://www.npmjs.com/package/native-date-adapter), now it contains lunar and jalali calenders.

## Install & Use

> it has th exact configs like [`flatpickr`](https://flatpickr.js.org)
>
> All input and output dates are in Gregorian format. Only the display format is in Jalali, etc.

### Initialization

```html
<script src="./dist/flatpickr.js"></script>
<script src="./dist/l10n/fa.js"></script>

<label>
  <div>Jalali Date</div>
  <input placeholder="Select Date..." class=date />
</label>
```

```js
var fp = flatpickr(".date", {
  locale: 'fa',
  altInput: true,
  altFormat: "F j, Y",
  dateFormat: "Y-m-d",
})
```
