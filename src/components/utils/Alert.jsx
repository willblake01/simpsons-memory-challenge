import Swal from 'sweetalert2'

export const sweetAlert = (title, text) => {
  Swal.fire({
    icon: 'warning',
    confirmButtonColor: 'orange',
    title,
    text
  })
}
