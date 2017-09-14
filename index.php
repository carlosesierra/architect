<?php get_header();?>
<?php get_sidebar();?>
<div class="wrapp">
<div class="container home">
<?php 
	if (have_posts() ) :  
		while (have_posts() ) :the_post(); ?>
		 <?php get_template_part('content',get_post_format()); ?>
   <?php endwhile;
endif; 
?>
</div></div>
<?php get_footer();?>