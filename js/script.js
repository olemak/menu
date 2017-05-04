$(document).ready(()=>{
	$('[data-open-menu]').click((event)=>{
		$('[data-menu]').toggleClass("open")
	})

	$('[data-submenu]').click((event)=>{
		$(event.currentTarget).toggleClass("expanded")
	})
})

