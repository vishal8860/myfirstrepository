
        $(document).ready(function () {
            $("#btn_progress").click(function () {
                $("#package_progress").show();
                $("#table").hide();
                $("#circles").hide();
            });

            $("#btn_circles").click(function () {
                $("#package_progress").hide();
                $("#table").hide();
                $("#circles").show();
            });

            $("#btn_tables").click(function () {
                $("#package_progress").hide();
                $("#table").show();
                $("#circles").hide();
            });


        });
