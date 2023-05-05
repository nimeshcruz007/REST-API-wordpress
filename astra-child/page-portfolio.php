<?php

get_header();

if(have_posts()):
    while(have_posts()):the_post(); ?>

    <div class="post page">

    <!-- quick post creator -->
    <div class="quick-add-form">
        <h2>Quick Add Post</h2>
        <input type="text" name="title" id="quick-form-title" placeholder="Title">
        <textarea name="content" id="quick-form-post-content" cols="30" rows="10" placeholder="Content"></textarea>
        <button id="quick-add-btn">Add Post</button>
    </div>

        <!-- column container -->
        <div class="column-container clearfix">

            <!-- title-column -->
            <div class="title-column">
                <h2><?php the_title(); ?></h2>
            </div>
            <!-- /title-column-ends -->

            <!-- text-column -->
            <div class="text-column">
                <?php the_content(); ?>
            </div>
            <button id= "portfolio-posts-btn">Load more portfolio</button>
            <div id="portfolio-posts-container"></div>
        </div>
</div>

    <?php 
        endwhile;
    endif;
        get_footer();
