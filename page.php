<?php get_header();?>
<?php get_sidebar();?>
<div class="wrapp">
<div class="container page">
  <div class="cont-top-gap"></div>
  <?php
    if (have_posts() ) :
  while (have_posts() ) :the_post(); ?>
  <section id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <h1 class="title">
    <a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>">
      <?php the_title(); ?>
    </a>
    </h1>
    <article><div class="cont">
      <?php the_content(); ?>
    </div></article>
  </section>
</section>
<?php endwhile;
endif;
?>
</div></div>
<?php get_footer();?>